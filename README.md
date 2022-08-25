# TechInterview

Welcome to the Chariot Tech Interview. During this session we will test different components of a full-stack application. Let's explore the deep end of singularity :scream_cat:

### Requirements
- Node.js 12.22.0 or later
- MacOS, Windows (including WSL), and Linux are supported

## Getting Started 
### 1) Start Client and Server Locally 
1. Git clone the repository 
2. Run the dashboard and sever locally 

### 2) Something is wrong, can you figure what it is? 
Ohh no! When we input a question nothing happens. Sasha is supposed to respond with an answer. Can you figure out what is wrong? Hint, look at the network tab and console logs. 

### 3) But what was the question?
Nice! Sasha is answering now. Now, let's add some functionality. We are only storing the answer but it would be useful to also store the question. Can you help us do that? 

### 4) Find the needle in the haystack

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

#### Example 1:
```
Input: haystack = "hello", needle = "ll"
Output: 2
```
#### Example 2:
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

#### Constraints:
```
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
```
