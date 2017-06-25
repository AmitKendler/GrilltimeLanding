import React from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";
import menu from "./menuJson";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";

const Menu = () =>
  <div>

    <Tabs tabType={'scrollable-buttons'}>
      {menu.subMenus.map(subMenu =>
        <Tab label={subMenu.name}>
          <List>
            <Subheader>{subMenu.extra}</Subheader>
            {subMenu.items.map(item =>
              <ListItem
                primaryText={item.title}
                secondaryText={<p>{item.desc}</p>}
                secondaryTextLines={2}
                rightIcon={<div>{item.price}</div>}
                disabled
              />
            )}
          </List>
        </Tab>
      )}
    </Tabs>
  </div>;

export default Menu;
