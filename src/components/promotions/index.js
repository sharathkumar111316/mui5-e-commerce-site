import { Box, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionContainer } from "../../styles/promotions";

const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subcribe :)",
];

export default function Promotions() {

    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setShow(false);
        }, 3000);

        const intervlId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)
            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000);

        }, 4000);
        
        return () => {
            clearInterval(intervlId);
        }
    },[]);

    return (
        <PromotionContainer ref={containerRef}>
        <Slide 
            container={containerRef.current}
            direction={show ? "left" : "right"}
            in={show}
            timeout={{
                enter: 500,
                exit: 100,
            }}
            >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
        </Slide>
        </PromotionContainer>
    );
}