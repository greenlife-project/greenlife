import type { Meta, StoryObj } from '@storybook/react';

import {GuideCard} from "@garden/ui";

const meta : Meta<typeof GuideCard> =  {
    title: 'компоненты/Card',
    component: GuideCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Guidecards: Story = {
    args: {
        title: "Текст",
        img: "https://storage.yandexcloud.net/greenlife/Rectangle%201368.png",
        id: "sdsds"
    },
};
