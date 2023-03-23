import type { Meta, StoryObj } from '@storybook/react';

import {LongCard} from "@garden/ui";

const meta : Meta<typeof LongCard> =  {
    title: 'компоненты/Card',
    component: LongCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Longcard: Story = {
    args: {
        title: "Текст",
        description: "sdasdasdasdasd",
        name: "dasdasd",
    },
};
