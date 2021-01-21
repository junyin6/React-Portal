import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";
import { Portal, absolute } from "Utilities";
import { Card } from "./Cards";
import Icon from "./Icon";

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({
    y: "top",
    x: "right",
  })};
  border: none;
  background: transparent;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

function Modal(props) {
  const { toggle, setToggle, children } = props;
  return (
    <Portal>
      <Transition
        items={toggle}
        unique={true}
        from={{ opacity: 0, bgOpacity: 0, y: -200 }}
        enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
        leave={{ opacity: 0, bgOpacity: 0, y: 200 }}
      >
        {(toggle) =>
          toggle &&
          ((styles) => (
            <ModalWrapper>
              <ModalCard
                style={{
                  transform: `translate3d(0, ${styles.y}px, 0)`,
                  opacity: styles.opacity,
                }}
              >
                <h1>{styles.opacity}</h1>
                <CloseButton onClick={setToggle}>
                  <Icon name="close" color="grey" />
                </CloseButton>

                {children}
              </ModalCard>
              <Background
                onClick={setToggle}
                style={{ opacity: styles.bgOpacity }}
              />
            </ModalWrapper>
          ))
        }
      </Transition>
    </Portal>
  );
}

export default Modal;
