# CheckboxMenu
Dropdown Menu with Checkbox

import CheckboxMenu from "./CheckboxMenu";

<CheckboxMenu
    hintText="Transaction Category"
    options={["Bill-Payments and Transfers", "Balance enquiries and Pin Change", "Card Withdrawal and Cardholder Transfers", "Purchase"]}
    width="360px"
    onChange={(selection) => {
        console.log(selection);
    }}
/>

<CheckboxMenu
    hintText="Response"
    options={["Successful", "Declined"]}
    onChange={(selection) => {
        console.log(selection);
    }}
/>
