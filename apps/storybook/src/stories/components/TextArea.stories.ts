import type { Meta, StoryObj } from '@storybook/react';

import { TextArea} from "ui";

const meta : Meta<typeof TextArea> =  {
    title: 'компоненты/TextArea',
    component: TextArea,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "sss"
    },
};
