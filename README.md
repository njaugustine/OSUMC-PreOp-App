# medical-preop-consulting-app

## How to run the application.

---

## App Colors
<br>

>
> This is the primary color palette which we got from [here](https://brand.osu.edu/color/).
>
> * Scarlet (PMS 200)
>   - PMS 200
>   - CMYK: 3 100 63 12
>   - RGB: 187 0 0
>   - HEX: #BB0000
> * Grey (PMS 424)
>   - CMYK: 56 47 47 15
>   - RGB: 102 102 102
>   - HEX: #666666
> * White
>   - CMYK: 0 0 0 0
>   - RGB: 255 255 255
>   - HEX: #FFFFFF
> * Black
>   - CMYK: 0 0 0 100
>   - RGB: 0 0 0
>   - HEX: #000000
>

<br>

# Screens

## System
The System's component takes a JSON file describing an algorithmic assessement as a series of questions allowing the user to easily run an assessment for a person that is about to go into surgery.

### Below are the assessment calculators currently supported by the application.

 - **Pre-Op Walkthrough**

To add additional calculators, you define the algorithm in JSON file following the format described in the `procedure-template.json` file. Consider the following JSON file:
```
1.  {
2.     "id": 12,
3.     "description": "The question you are asking.",
4.     "additional_info": "Additional information about the question.",
5.     "options": [{
6.         "text": "Yes",
7.         "id": 1
8.     }, {
9.         "text": "No",
10.        "id": 2
11.    }]
12. }
```
On line 2, we have the unique identifier for this question. On line 3, we have the title for the question. This should be a single sentence. On line 4, we have a more detailed description about the question. This can multiple sentence, but should be constrained to a paragraph or less as we assume our users are very familiar with the algorithm already. The goal here is to remind them what the question means and not teach them what the question does. For options, we have an array of options, think buttons, that allow us to redirect the user to the appropiate next question based on their selection here. Note again, `"id"` here refers to the unique identifier for this assessment. They must be unique for a single assessment, but need not be unique accross multiple assessments.

To have it show up in the homepage, you also need to update the `menu.json` file to link to the assessment calculator and so that it shows up with the other subsytems. Note, if you are adding an assessment that already appears on the homescreen, you may only have to update the link to the assessments JSON file.

<br>

## Home

The Home component is a simple landing page for the app itself, here we generate a list of systems and their subsystems to display on the screen.

# Components

## Button

The Button's component is a single component where we have predefined some buttons that will be used throughout the app. Below are some typically declarations for a button. The best way to figure how what they do is to put them in an empty view inside the project and see what they look like, etcetera.

```
<Button onPress={action to take} title={"name"} type={"outline"} size={"small"} />
<Button onPress={action to take} title={"name"} type={"outline"} />
<Button onPress={action to take} title={"name"} />
```
Note: `onPress` and `title` are always required as `onPress` specifies the action to take when the button is pressed and `title` specifies the text that is shown on the button. The rest of the props are not required, but by default `type` defaults to `filled` and `size` defaults to `large`.

## Disclaimer

Here we define the disclaimer that is shown when the app is initially launched. Browsing over it should be self exlpanatory.

## List

Here we define a collapsible list that gets shown on the home screen. Note, their is nothing special about it being on the homescreen, it could just as well be anywhere else in the app. To use it, consider the following:
```
<List title={title} key={unique id} data={list items} navigation={link to} />
```
Here, title is the title of the list, key is some unique identifier you come up with, data is just the list items you have for the list and navigation is where you want to navigate to if the list is pressed.

<br>

# Styles

## Colors

Here you will find a list of predefined colors that you easily change to change the design of the app itself. Note, that in certain cases, you may need to go through the files to change the
colors manually if we haven't refactored all of them to date.

## Styles

Here you will find the predefined styles that we are using widely throughout the application. It is mostly analagous to CSS files in web development.
