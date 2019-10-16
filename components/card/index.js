import React from 'react';
import { Flex, Type, Box, Card as SysCard } from 'blockstack-ui';

const Header = ({ title, actions, ...rest }) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    px={4}
    py={4}
    borderBottom="1px solid"
    borderColor="blue.mid"
    {...rest}
  >
    <Type fontSize={2} fontWeight={500} color="blue.dark" flexShrink={0}>
      {title}
    </Type>
    {actions || null}
  </Flex>
);

const Card = ({ title, actions, children, headerProps, ...rest }) => (
  <SysCard flexGrow={1} p={0} fontWeight={500} {...rest}>
    {title ? <Header title={title} actions={actions} {...headerProps} /> : null}
    {children}
  </SysCard>
);

Card.Header = Header;

export { Card };
