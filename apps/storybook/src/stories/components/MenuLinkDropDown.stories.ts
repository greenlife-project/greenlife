import type { Meta, StoryObj } from '@storybook/react';

import {MenuLink, MenuLinkDropDown} from "ui";

const meta : Meta<typeof MenuLinkDropDown> =  {
    title: 'компоненты/MenuLinkDropDown',
    component: MenuLinkDropDown,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Кнопка',
        href: "#",
        links: Array.of({label: "test", link:"test"})
    },
};
