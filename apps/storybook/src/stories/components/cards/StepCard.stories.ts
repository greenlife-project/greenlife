import type { Meta, StoryObj } from '@storybook/react';

import {StepCard} from "@garden/ui";

const meta : Meta<typeof StepCard> =  {
    title: 'компоненты/Card',
    component: StepCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Stepcard: Story = {
    args: {
        title: "Текст",
        img: "https://storage.yandexcloud.net/greenlife/Rectangle%201368.png",
        description: "dsadasd",
    },
};
