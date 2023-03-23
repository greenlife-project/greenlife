import type { Meta, StoryObj } from '@storybook/react';

import {CommunityCard} from "@garden/ui";

const meta : Meta<typeof CommunityCard> =  {
    title: 'компоненты/Card',
    component: CommunityCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Communitycard: Story = {
    args: {
        view: 1000,
        label: "Руководства"
    },
};
