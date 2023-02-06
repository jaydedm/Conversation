import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";
import SwipeableViews from 'react-swipeable-views';
import { BurgerMenu } from '../../Pages/Menu/BurgerMenu';
import { AllTheRestMenu } from '../../Pages/Menu/AllTheRest';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

export const MenuNav = (): ReactElement => {
  const [value, setValue] = React.useState(0);
  
  function a11yProps(index: any) {
    return {
      id: `action-tab-${index}`,
      "aria-controls": `action-tabpanel-${index}`,
    };
  }

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };



  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary" style={{marginTop: '6.5vh'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="action tabs example"
        >
          <Tab label="burgers" {...a11yProps(0)}></Tab>
          <Tab label="shakes" {...a11yProps(1)}></Tab>
          <Tab label="kids" {...a11yProps(2)}></Tab>
          <Tab label="salads" {...a11yProps(3)}></Tab>
          <Tab label="the rest" {...a11yProps(4)}></Tab>
          <Tab label="drinks"></Tab>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{marginTop: 100}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BurgerMenu/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Shakes
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Kids
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Salads
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <AllTheRestMenu/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Drinks
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
