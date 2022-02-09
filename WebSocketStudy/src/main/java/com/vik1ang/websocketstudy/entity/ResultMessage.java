package com.vik1ang.websocketstudy.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResultMessage {
    private boolean systemMsgFlag;
    private String fromName;
    private Object message;
}
