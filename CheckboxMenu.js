import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Popover, Icon, Button } from "antd";
import './checkbox-menu.css';

let selectAllValue = "ALL";

class CheckboxMenu extends React.Component {
    state = {
        selectedItems: [],
        allChecked: false,
    };

    componentDidMount = () => {
        const { data } = this.props;
        if (data && data.length)
            this.setState({ selectedItems: [...data] });
    };

    onChange = (selection) => {
        const { onChange, options } = this.props;
        const { allChecked } = this.state;

        if (selection.includes(selectAllValue)) {
            this.setState({ selectedItems: [...options, selectAllValue], allChecked: true });
            selection = [...options, selectAllValue];
        }
        else {
            if (allChecked) {
                this.setState({ selectedItems: [], allChecked: false });
                selection = [];
            }
            else
                this.setState({ selectedItems: [...selection] });
        }
        
        return onChange(selection.filter(item => item !== selectAllValue));
    };

    checkboxRender = () => {
        const { options } = this.props;
        const { selectedItems } = this.state;

        return (
            <div style={{
                maxHeight: 300,
                overflow: "auto",
            }}>
                <Checkbox.Group
                    onChange={this.onChange}
                    value={selectedItems}>
                    <Checkbox
                        key={selectAllValue}
                        value={selectAllValue}
                        style={{ color: "#121212", fontSize: 16, padding: 7, display: "block", margin: "0" }}
                    >
                        Select All
                    </Checkbox>
                    {options.map((label, i) => {
                        return (
                            <Checkbox
                                key={label}
                                value={label}
                                style={{ color: "#121212", fontSize: 16, padding: 7, display: "block", margin: "0" }}
                            >
                                {label}
                            </Checkbox>
                        );
                    })}
                </Checkbox.Group>
            </div>
        );
    };

    render() {
        const { selectedItems } = this.state;
        const { hintText = "Select...", width = "150px" } = this.props;
        const CheckboxRender = this.checkboxRender;
        return (
            <Popover
                content={<CheckboxRender />}
                trigger="click"
                style={{ padding: 10 }}
                overlayStyle={{
                    width
                }}
                placement="bottomLeft"
            >
                <Button
                    style={{ color: "#121212", fontSize: 15 }}>
                    {selectedItems.length > 0 ? selectedItems[selectedItems.length - 1] : hintText} <Icon type="down" />
                </Button>
            </Popover>
        );
    }
}

CheckboxMenu.propTypes = {
    hintText: PropTypes.string,
};

export default CheckboxMenu;
