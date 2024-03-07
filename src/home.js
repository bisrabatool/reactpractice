import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function nav() {
    return (
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab isDisabled>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    )}
    export default nav;