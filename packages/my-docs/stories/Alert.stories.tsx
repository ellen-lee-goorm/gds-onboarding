import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from '../../my-components/src/Alert';
import { AlertProps } from '../../my-components/src/Alert/Alert.types';

const meta: Meta<AlertProps> = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
    },
  },
  args: {
    color: 'primary',
  },
};

export default meta;

const Template = (args: AlertProps) => <Alert {...args} />;

export const Primary: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'primary',
    children: 'This is a primary alert',
  },
};

export const Secondary: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'secondary',
    children: 'This is a secondary alert',
  },
};

export const Success: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'success',
    children: 'This is a success alert',
  },
};

export const Warning: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'warning',
    children: 'This is a warning alert',
  },
};

export const Danger: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'danger',
    children: 'This is a danger alert',
  },
};

export const Dark: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'dark',
    children: 'This is a dark alert',
  },
};

export const Hint: StoryObj<AlertProps> = {
  render: Template,
  args: {
    color: 'hint',
    children: 'This is a hint alert',
  },
};
