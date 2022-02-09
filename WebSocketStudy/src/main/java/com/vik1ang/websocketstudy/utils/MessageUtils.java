package com.vik1ang.websocketstudy.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vik1ang.websocketstudy.entity.ResultMessage;

public class MessageUtils {
    public static String getMessage(boolean systemMsgFlag, String fromName, Object message) {
        ResultMessage resultMessage = new ResultMessage();
        resultMessage.setSystemMsgFlag(systemMsgFlag);
        resultMessage.setMessage(message);

        if (!systemMsgFlag) {
            resultMessage.setFromName(fromName);
        }
        ObjectMapper objectMapper = new ObjectMapper();
        String repStr = null;
        try {
            repStr = objectMapper.writeValueAsString(resultMessage);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return repStr;
    }
}
