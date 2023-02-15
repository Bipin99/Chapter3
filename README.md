# Chapter3

Created a nested element using CreateElement and then same using JSX.


Q.What is JSX?
  
->  JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

Q.Superpowers of JSX?
->1.allows us to write HTML in React.
  2.it makes the development and debugging process easier for many developers.
  3.helping you to more easily create user interfaces for your web applications.

Q.Role of type attribute in Script Tag? What Options can be used there?
->This attribute indicates the type of script represented. The value of this attribute will be one of the following:

  Attribute is not set (default), an empty string, or a JavaScript MIME type
  Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type
  

  A MIME type most-commonly consists of just two parts: a type and a subtype, separated by a slash (/) — with no whitespace between:

type/subtype.
  The type represents the general category into which the data type falls, such as video or text.

The subtype identifies the exact kind of data of the specified type the MIME type represents. For example, for the MIME type text, the subtype might be plain (plain text), html (HTML source code), or calendar (for iCalendar/.ics) files.

Each type has its own set of possible subtypes. A MIME type always has both a type and a subtype, never just one or the other.

For example, for any MIME type whose main type is text, you can add the optional charset parameter to specify the character set used for the characters in the data. If no charset is specified, the default is ASCII (US-ASCII) unless overridden by the user agent's settings. To specify a UTF-8 text file, the MIME type text/plain;charset=UTF-8 is used.

MIME types are case-insensitive but are traditionally written in lowercase. The parameter values can be case-sensitive.

common MIME types are:
text/javascript (this is default)
text/ecmascript
application/ecmascript
application/javascript

  MIME type also known as media type.

Q. Difference between {Componenet} vs <Componenet/> vs <Componenet> </Componenet> in react?

-> {Component} is just a basic react element eg = var component=<h1>hello</h1> . we can use this to render by using {Component}. 
    <Component/>  is self closed component in react.  
  <Componenet> </Componenet>  is same as previous However syntax is different and If we have Child component then this has to be used.
  The value we pass in between this, we can access this by props.children.
