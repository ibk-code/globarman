import React, { PropsWithChildren, useCallback, useState } from "react";
import styled from "styled-components";

interface AccordionProps extends PropsWithChildren {
  /**
   * The title of the accordion
   * @default null
   */
  title: string | React.ReactNode;
  /**
   * The key of the accordion to be selected
   * @default null
   */
  dataKey?: string;
  /**
   * Controls the open state of the accordion
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback function that is fired when the accordion is toggled.
   * @param isOpen
   * @returns isOpen
   */
  onToggle?: () => void;
}

const AccordionMain: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  const [open, setOpen] = useState(false);

  const shouldOpen = isOpen ?? open;

  const handleToggle = useCallback(() => {
    if (typeof onToggle === "function") {
      return onToggle();
    }

    setOpen((prevOpen) => !prevOpen);
  }, [onToggle]);

  return (
    <AccordionWrapper>
      <AccordionButton className="accordion-header" onClick={handleToggle}>
        <h4 className="accordion-title">{title}</h4>
      </AccordionButton>

      <div className="accordion-content">
        {shouldOpen && <div className="accordion-body">{children}</div>}
      </div>
    </AccordionWrapper>
  );
};

AccordionMain.displayName = "Accordion";

const AccordionGroup = ({
  children,
  allowMultiple = false,
  activeIndex: _active,
}: {
  children: React.ReactNode;
  allowMultiple?: boolean;
  activeIndex?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | number[] | undefined>(
    allowMultiple ? [0] : _active || 0
  );

  const handleAccordionClick = useCallback(
    (index: number) => {
      if (allowMultiple) {
        setActiveIndex((prevIndex: any) => {
          if (Array.isArray(prevIndex) && prevIndex.includes(index)) {
            return prevIndex.filter((i: number) => i !== index);
          }

          return [...prevIndex, index];
        });
      } else {
        setActiveIndex((prevIndex: any) => (prevIndex === index ? -1 : index));
      }
    },
    [allowMultiple]
  );

  const renderChildren = useCallback(
    (children: any, parentIndex = 0) => {
      return React.Children.map(children, (child: any, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        let currentIndex = parentIndex;

        if ((child as any).type?.displayName === "Accordion") {
          currentIndex = parentIndex++;
        }

        if ((child as any).props.children) {
          child = React.cloneElement(child, {
            children: renderChildren(
              (child as any).props.children,
              parentIndex
            ),
          } as any);
        }

        if (child.type === Accordion) {
          return React.cloneElement(child, {
            isOpen: Array.isArray(activeIndex)
              ? activeIndex.includes(currentIndex)
              : activeIndex === currentIndex,
            onToggle: () => handleAccordionClick(currentIndex),
          });
        }

        return child;
      });
    },
    [activeIndex, handleAccordionClick]
  );

  return renderChildren(children);
};

export const Accordion = Object.assign(AccordionMain, {
  Group: AccordionGroup,
});

const AccordionWrapper = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5rem 1.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--ash);
  }
`;

const AccordionButton = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;

  & h4 {
    font-weight: 700;
    font-family: Inter;
    font-size: 1.5rem;
  }
`;
