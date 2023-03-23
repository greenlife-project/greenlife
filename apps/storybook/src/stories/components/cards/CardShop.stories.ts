import type { Meta, StoryObj } from '@storybook/react';

import {CardShop} from "@garden/ui";

const meta : Meta<typeof CardShop> =  {
    title: 'компоненты/Card',
    component: CardShop,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cardshop: Story = {
    args: {
        id: "123213",
        title: "Текст",
        imgURL: "https://storage.yandexcloud.net/greenlife/Rectangle%201368.png",
        price: "10"
    },
};
