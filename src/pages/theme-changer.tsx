import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Layout } from "@/components/layouts";

const ThemeChanger = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChanger;
