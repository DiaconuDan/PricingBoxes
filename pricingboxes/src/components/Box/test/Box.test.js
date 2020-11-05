import React from "react";
import { render, screen } from "@testing-library/react";
import Box from "../Box";

describe("Box component", () => {
  test("renders correctly the props", () => {

    const featureList = [
        "Access to 10,000 of the team’s most recent messages",
        "10 integrations with other apps like Google Drive, Office 365, and more",
    ]

    const buttonText = "Test" ;
    const level = "PremiumTest" ;


    render(<Box featureList={featureList} buttonText={buttonText} level={level}  />);

 
    expect(screen.getByText("Access to 10,000 of the team’s most recent messages")).toBeInTheDocument();
    expect(screen.getByText("10 integrations with other apps like Google Drive, Office 365, and more")).toBeInTheDocument();
    expect(screen.getByText("PremiumTest")).toBeInTheDocument();
  
  });

  test("expand functionality should work as expected for big lists of features", () => {

    const featureList = [
        "Access to 10,000 of the team’s most recent messages",
        "10 integrations with other apps like Google Drive, Office 365, and more",
        "Unlimited apps and integrations",
        "Group video calls up to 15 users",
        "Work Securely with other organisations with Slack Connect",
        "OAuth with Google",
        "Two-factor authentication settings",
        "Customer retention policies for message and files",
        "Custom user groups for different teams and departments",
        "Manage channel posting permissions for #general channel only",
        "Channel recommendations",
        "Priority support"
    ]

    const buttonText = "Test" ;
    const level = "PremiumTest" ;


    render(<Box featureList={featureList} buttonText={buttonText} level={level}  />);

    const expandDiv = screen.getByText("See more...");
    
    expect(screen.queryByText("See less...")).toBeNull();
    expect(expandDiv).toBeInTheDocument();
    expandDiv.click();

    const minimizeDiv = screen.getByText("See less...");

    expect(screen.queryByText("See more...")).toBeNull();
    expect(minimizeDiv).toBeInTheDocument();
    minimizeDiv.click();


    expect(expandDiv).toBeInTheDocument();
    


  
  });

  test("expand functionality should work as expected for small lists of features", () => {

    const featureList = [
        "Access to 10,000 of the team’s most recent messages",
    ]
    const buttonText = "Test" ;
    const level = "PremiumTest" ;


    render(<Box featureList={featureList} buttonText={buttonText} level={level}  />);

    expect(screen.queryByText("See less...")).toBeNull();
    expect(screen.queryByText("See more...")).toBeNull();

  });
});