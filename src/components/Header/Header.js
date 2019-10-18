import React, { PureComponent } from "react";
import "./Header.css";
import FormSearch from "../FormSearch/FormSearch";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header__background">
          <div className="header__headline">
            <div className="header__name">Messages</div>
            <div className="header__unread-messages">137</div>
          </div>
          <FormSearch
            className="header__form-search"
            onChange={this.props.onChange}
            onClick={this.props.onClick}
            value={this.props.value}
          />
        </div>
      </header>
    );
  }
}
export default Header;
