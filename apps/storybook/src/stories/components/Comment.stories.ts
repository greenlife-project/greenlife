import type { Meta, StoryObj } from '@storybook/react';

import {Comment} from "ui";

const meta : Meta<typeof Comment> =  {
    title: 'компоненты/Comment',
    component: Comment,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      firstname: "Фамилия",
      lastname: "Имя",
      date: "19 Августа",
      text: "Это комментарий"
    },
};
