import type { Meta, StoryObj } from '@storybook/react';

import {BreadCump} from "ui";

const meta : Meta<typeof BreadCump> =  {
    title: 'компоненты/BreadCump',
    component: BreadCump,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: Array.of({label: "Справочник", href: "/guide"}, {label: "Главная", href: "/guide"}),
    },
};
