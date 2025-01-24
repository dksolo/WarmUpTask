# Project Month WarmUp
A little warm up project to revise UI composition skills 

##Project Structure: 
### Pages:

MainPage:
— Layout
—— Section
——— Button#login -> Modal(LoginForm)
——— Button#register -> Modal(RegisterForm)

LoginPage:
— Layout
—— Section
——— Card -> LoginForm

RegisterPage:
— Layout
—— Section
——— Card > RegisterForm

-----------------------
### Screens:

LoginForm:
— Form
—— Field > InputEmail
—— Field > InputPassword

RegisterForm:
— Form
—— Field > InputText
—— Field > InputEmail
—— Field > InputPassword
—— Field > InputPassword

-----------------------
### Containers

Layout:
— Header
— {children}
— Footer

Section:
— {children}

Card:
— {children}

Header:
— Logo
— Menu
— {children}

Footer:
— Logo
— Menu[]

Form:
— {children}

Field:
— {children}

Modal:
— {children}

------------------------
### Components

— Anchor
— Typography {Title, Text}
— Input {InputText, InputEmail, InputPassword}
— Action {Button, Link}


