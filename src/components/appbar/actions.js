import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Colors } from "../../styles/theme";

export default function  Actions({ matches }) {

    const Component = matches 
    ? ActionIconsContainerMobile 
    : ActionIconsContainerDesktop;

    return (
        <Component>
        <MyList type="row">
            <ListItemButton sx = {{ justifyContent: "center", }}>
                <ListItemIcon sx = {{ color: matches && Colors.secondary, display: "flex", justifyContent: "center", }}>
                    <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx = {{ justifyContent: "center", }}>
                <ListItemIcon  sx = {{ color: matches && Colors.secondary, display: "flex", justifyContent: "center", }}>
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx = {{ justifyContent: "center", }}>
                <ListItemIcon  sx = {{ color: matches && Colors.secondary, display: "flex", justifyContent: "center", }}>
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
        </MyList>
        </Component>
    )
}