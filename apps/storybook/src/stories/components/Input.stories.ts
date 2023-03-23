import type { Meta, StoryObj } from '@storybook/react';

import {Input} from "ui";

const meta : Meta<typeof Input> =  {
    title: 'компоненты/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Кнопка',
        type: "text",
        placeholder: "Просто напиши"
    },
};
