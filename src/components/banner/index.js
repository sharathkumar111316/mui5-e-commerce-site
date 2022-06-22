import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function Banner() {
       
    return (
        <BannerContainer>
                <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">
                    Huge Collection
                </Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </BannerDescription>
                <BannerShopButton color="primary">Show Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}