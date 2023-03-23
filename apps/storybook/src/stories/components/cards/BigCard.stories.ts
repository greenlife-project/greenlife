import type { Meta, StoryObj } from '@storybook/react';

import {BigCard} from "@garden/ui";

const meta : Meta<typeof BigCard> =  {
    title: 'компоненты/Card',
    component: BigCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Bigcard: Story = {
    args: {
        description: "аллалаллалалалал",
        title: "Текст",
        img: "https://storage.yandexcloud.net/greenlife/Rectangle%201368.png",
        price: "10"
    },
};
