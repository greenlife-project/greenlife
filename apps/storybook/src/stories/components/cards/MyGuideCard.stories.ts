import type { Meta, StoryObj } from '@storybook/react';

import {MyGuideCard} from "@garden/ui";

const meta : Meta<typeof MyGuideCard> =  {
    title: 'компоненты/Card',
    component: MyGuideCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MyGuidecard: Story = {
    args: {
        title: "Текст",
        img: "https://storage.yandexcloud.net/greenlife/Rectangle%201368.png",
        name: "dasdasd",
        id: "sdsd"
    },
};
