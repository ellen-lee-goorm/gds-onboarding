import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DialogProps } from '../../my-components/src/Dialog/Dialog.types';
import Dialog from '../../my-components/src/Dialog';
import { DialogBodyProps } from '../../my-components/src/Dialog/Body/Body.types';
import { DialogContentsProps } from '../../my-components/src/Dialog/Contents/Contents.types';

type DialogType = DialogProps & DialogBodyProps & DialogContentsProps;
const meta: Meta<DialogType> = {
  title: 'Dialog/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['md', 'lg', 'xl'],
      },
    },
    scrimClickable: {
      control: {
        type: 'boolean',
      },
    },
    maxHeight: {
      control: {
        type: 'text',
      },
    },
    expanded: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: false,
    },
  },
};

export default meta;

type DialogStory = StoryObj<DialogType>;
const Template: DialogStory = {
  render: ({ expanded, maxHeight, ...args }: DialogType) => {
    return (
      <Dialog {...args}>
        <Dialog.Trigger>
          <button>open</button>
        </Dialog.Trigger>
        <Dialog.Contents maxHeight={maxHeight}>
          <Dialog.Header>
            <Dialog.Title>다이얼로그</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body expanded={expanded}>
            <Dialog.Description>다이얼로그 설명입니다.</Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>닫기</Dialog.Close>
            <button>확인</button>
          </Dialog.Footer>
        </Dialog.Contents>
      </Dialog>
    );
  },
};

export const Default = {
  ...Template,
  args: {
    expanded: false,
    maxHeight: '80vh',
    size: 'md',
    scrimClickable: false,
  },
};

// maxHeight를 넘었을 때, 스크롤이 되는지 확인
const ScrollTemplate: DialogStory = {
  render: ({ expanded, maxHeight, ...args }: DialogType) => {
    return (
      <Dialog {...args}>
        <Dialog.Trigger>
          <button>open</button>
        </Dialog.Trigger>
        <Dialog.Contents maxHeight={maxHeight}>
          <Dialog.Header>
            <Dialog.Title>다이얼로그</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body expanded={expanded}>
            <Dialog.Description>다이얼로그 설명입니다.</Dialog.Description>
            <div style={{ height: '1000px' }}>long long</div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>닫기</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Contents>
      </Dialog>
    );
  },
};

export const Scroll = {
  ...ScrollTemplate,
  args: {
    expanded: false,
    maxHeight: '80vh',
    size: 'md',
    scrimClickable: false,
  },
};

// 스타일링 지정
const StylingTemplate: DialogStory = {
  render: ({ expanded, maxHeight, ...args }: DialogType) => {
    return (
      <Dialog {...args}>
        <Dialog.Trigger>
          <button>open</button>
        </Dialog.Trigger>
        <Dialog.Contents maxHeight={maxHeight}>
          <Dialog.Header>
            <Dialog.Title>다이얼로그</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body expanded={expanded}>
            <Dialog.Description>다이얼로그 설명입니다.</Dialog.Description>
            <p>
              Dialog 요소에 스타일링을 지정할 수 있습니다. <br /> Footer의
              레이아웃 방향을 세로로 지정합니다.
            </p>
            <div style={{ height: '1000px', backgroundColor: 'lightBlue' }}>
              long
            </div>
          </Dialog.Body>
          <Dialog.Footer
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Dialog.Close>닫기</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Contents>
      </Dialog>
    );
  },
};

export const Styling = {
  ...StylingTemplate,
  args: {
    expanded: false,
    maxHeight: '80vh',
    size: 'md',
    scrimClickable: false,
  },
};
