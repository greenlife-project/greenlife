import type { Meta, StoryObj } from '@storybook/react';

import { MenuLink } from "ui";

const meta : Meta<typeof MenuLink> =  {
    title: 'компоненты/MenuLink',
    component: MenuLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Кнопка',
        href: "#"
    },
};
