/* eslint-disable no-unused-vars */
/*
 * <license header>
 */

import React, { useState, useEffect } from 'react'
import { attach } from "@adobe/uix-guest"
import {
  Flex,
  Form,
  ProgressCircle,
  Provider,
  Content,
  defaultTheme,
  Text,
  TextField,
  ButtonGroup,
  Button,
  Heading,
  View
} from '@adobe/react-spectrum'



import { extensionId } from "./Constants"

export default function ExportModal () {
  // Fields
  const [guestConnection, setGuestConnection] = useState()
  
  useEffect(() => {
    (async () => {
      const guestConnection = await attach({ id: extensionId })

      setGuestConnection(guestConnection)
    })()
  }, [])

  const onCloseHandler = () => {
    guestConnection.host.modal.close()
  }

  return (
    <Provider theme={defaultTheme} colorScheme='light'>
      <Content width="100%">
        <Text>Your modal content</Text>

        <Flex width="100%" justifyContent="end" alignItems="center" marginTop="size-400">
          <ButtonGroup align="end">
            <Button variant="primary" onClick={onCloseHandler}>Close</Button>
          </ButtonGroup>
        </Flex>
      </Content>
    </Provider>
  )
}
