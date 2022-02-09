package com.vik1ang.websocketstudy.webSocket;

import com.vik1ang.websocketstudy.utils.MessageUtils;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint(value = "/chat", configurator = GetHttpSessionConfigurator.class)
@Component
public class ChatEndpoint {

    private static Map<String, ChatEndpoint> onlineUsers = new ConcurrentHashMap<>();

    private Session session;

    private HttpSession httpSession;

    @OnOpen
    public void onOpen(Session session, EndpointConfig endpointConfig) {
        this.session = session;
        HttpSession httpSession = (HttpSession) endpointConfig.getUserProperties().get(HttpSession.class.getName());
        this.httpSession = httpSession;

        String userName = (String) httpSession.getAttribute("user");
        onlineUsers.put(userName, this);

        String message = MessageUtils.getMessage(true, null, getNames());
        boardCastAllUsers(message);
    }

    private Set<String> getNames() {
        return onlineUsers.keySet();
    }

    private void boardCastAllUsers(String message) {
        try {
            for (String userName : onlineUsers.keySet()) {
                ChatEndpoint chatEndpoint = onlineUsers.get(userName);
                chatEndpoint.session.getBasicRemote().sendText(message);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnMessage
    public void onMessage(String message, Session session) {

    }

    @OnClose
    public void onClose(Session session) {

    }
}
