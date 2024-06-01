"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2771],{2560:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=i(4848),s=i(8453);const l={slug:"machine-learning/iloc-cheatsheet",title:"Machine Learning Pandas iloc Cheatsheet",authors:["me"],tags:["Machine Learning","Data Preprocessing","iloc","pandas"],image:"./ml-pandas-iloc.png"},c="Pandas iloc Cheatsheet for Machine Learning",r={permalink:"/gerardo-perrucci/blog/machine-learning/iloc-cheatsheet",source:"@site/blog/machine-learning/2024-05-29-machine-learning-iloc.md",title:"Machine Learning Pandas iloc Cheatsheet",description:"The iloc indexer in pandas is a powerful tool for data selection, slicing, and manipulation, essential for preparing datasets for machine learning tasks. Here's a comprehensive guide to help you master iloc.",date:"2024-05-29T00:00:00.000Z",tags:[{label:"Machine Learning",permalink:"/gerardo-perrucci/blog/tags/machine-learning"},{label:"Data Preprocessing",permalink:"/gerardo-perrucci/blog/tags/data-preprocessing"},{label:"iloc",permalink:"/gerardo-perrucci/blog/tags/iloc"},{label:"pandas",permalink:"/gerardo-perrucci/blog/tags/pandas"}],readingTime:5.635,hasTruncateMarker:!1,authors:[{name:"Gerardo Perrucci",title:"Software Engineer",url:"https://github.com/centrodph",imageURL:"https://avatars.githubusercontent.com/u/2073951?v=4",key:"me"}],frontMatter:{slug:"machine-learning/iloc-cheatsheet",title:"Machine Learning Pandas iloc Cheatsheet",authors:["me"],tags:["Machine Learning","Data Preprocessing","iloc","pandas"],image:"./ml-pandas-iloc.png"},unlisted:!1,prevItem:{title:"Machine Learning Handling Missing Values",permalink:"/gerardo-perrucci/blog/machine-learning/learning-handling-missing-values"},nextItem:{title:"Machine Learning: Feature Scaling",permalink:"/gerardo-perrucci/blog/machine-learning/machine-learning-feature-scaling"}},t={image:i(7182).A,authorsImageUrls:[void 0]},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"1. Introduction to <code>iloc</code>",id:"1-introduction-to-iloc",level:2},{value:"2. Basic Usage",id:"2-basic-usage",level:2},{value:"Selecting Rows",id:"selecting-rows",level:3},{value:"Selecting Columns",id:"selecting-columns",level:3},{value:"3. Advanced Indexing",id:"3-advanced-indexing",level:2},{value:"Slicing Rows and Columns",id:"slicing-rows-and-columns",level:3},{value:"Selecting Specific Rows and Columns",id:"selecting-specific-rows-and-columns",level:3},{value:"4. Conditional Selection",id:"4-conditional-selection",level:2},{value:"5. Modifying Data",id:"5-modifying-data",level:2},{value:"6. Practical Machine Learning Examples",id:"6-practical-machine-learning-examples",level:2},{value:"Splitting Data into Features and Target",id:"splitting-data-into-features-and-target",level:3},{value:"Handling Missing Data",id:"handling-missing-data",level:3},{value:"Data Normalization",id:"data-normalization",level:3},{value:"Official Documentation",id:"official-documentation",level:2},{value:"Tutorial Videos",id:"tutorial-videos",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"iloc"})," indexer in pandas is a powerful tool for data selection, slicing, and manipulation, essential for preparing datasets for machine learning tasks. Here's a comprehensive guide to help you master ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["You can download the .ipynb file from ",(0,a.jsx)(e.a,{href:"https://github.com/centrodph/ml/blob/main/data-processing/Pandas%20iloc%20Cheatsheet%20for%20Machine%20Learning.ipynb",children:"here"})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Machine Learning Pandas iloc Cheatsheet",src:i(309).A+"",width:"1584",height:"998"})}),"\n",(0,a.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.strong,{children:["Introduction to ",(0,a.jsx)(e.code,{children:"iloc"})]})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Basic Usage"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Selecting Rows"}),"\n",(0,a.jsx)(e.li,{children:"Selecting Columns"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Advanced Indexing"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Slicing Rows and Columns"}),"\n",(0,a.jsx)(e.li,{children:"Selecting Specific Rows and Columns"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Conditional Selection"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Modifying Data"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Practical Machine Learning Examples"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Splitting Data into Features and Target"}),"\n",(0,a.jsx)(e.li,{children:"Handling Missing Data"}),"\n",(0,a.jsx)(e.li,{children:"Data Normalization"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Oficial documentation"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Tutorial Videos"})}),"\n"]}),"\n",(0,a.jsxs)(e.h2,{id:"1-introduction-to-iloc",children:["1. Introduction to ",(0,a.jsx)(e.code,{children:"iloc"})]}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"iloc"})," indexer is used for integer-location based indexing for selection by position. It is one of the primary indexers for Pandas data structures."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import pandas as pd\n\n# Sample DataFrame\ndata = {\n    'A': [1, 2, 3, 4],\n    'B': [5, 6, 7, 8],\n    'C': [9, 10, 11, 12],\n    'D': [13, 14, 15, 16]\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A  B   C   D\n    0  1  5   9  13\n    1  2  6  10  14\n    2  3  7  11  15\n    3  4  8  12  16\n"})}),"\n",(0,a.jsx)(e.h2,{id:"2-basic-usage",children:"2. Basic Usage"}),"\n",(0,a.jsx)(e.h3,{id:"selecting-rows",children:"Selecting Rows"}),"\n",(0,a.jsxs)(e.p,{children:["To select rows using ",(0,a.jsx)(e.code,{children:"iloc"}),", you specify the row index."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first row\nprint(df.iloc[0])\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"    A     1\n    B     5\n    C     9\n    D    13\n    Name: 0, dtype: int64\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first three rows\nprint(df.iloc[:3])\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A  B   C   D\n    0  1  5   9  13\n    1  2  6  10  14\n    2  3  7  11  15\n"})}),"\n",(0,a.jsx)(e.h3,{id:"selecting-columns",children:"Selecting Columns"}),"\n",(0,a.jsx)(e.p,{children:"To select columns, you specify the column index."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first column\nprint(df.iloc[:, 0])\n\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"    0    1\n    1    2\n    2    3\n    3    4\n    Name: A, dtype: int64\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first two columns\nprint(df.iloc[:, :2])\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A  B\n    0  1  5\n    1  2  6\n    2  3  7\n    3  4  8\n"})}),"\n",(0,a.jsx)(e.h2,{id:"3-advanced-indexing",children:"3. Advanced Indexing"}),"\n",(0,a.jsx)(e.h3,{id:"slicing-rows-and-columns",children:"Slicing Rows and Columns"}),"\n",(0,a.jsx)(e.p,{children:"You can slice both rows and columns simultaneously."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first two rows and the first two columns\nprint(df.iloc[:2, :2])\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A  B\n    0  1  5\n    1  2  6\n"})}),"\n",(0,a.jsx)(e.h3,{id:"selecting-specific-rows-and-columns",children:"Selecting Specific Rows and Columns"}),"\n",(0,a.jsx)(e.p,{children:"Specify exact row and column indices."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Select the first and third rows and the second and fourth columns\nprint(df.iloc[[0, 2], [1, 3]])\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       B   D\n    0  5  13\n    2  7  15\n"})}),"\n",(0,a.jsx)(e.h2,{id:"4-conditional-selection",children:"4. Conditional Selection"}),"\n",(0,a.jsxs)(e.p,{children:["Using ",(0,a.jsx)(e.code,{children:"iloc"})," in combination with conditions."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Example DataFrame\ndf_cond = pd.DataFrame({\n    'A': [1, 2, 3, 4, 5],\n    'B': [10, 20, 30, 40, 50],\n    'C': [100, 200, 300, 400, 500]\n})\n\n# Condition to select rows where column 'A' values are greater than 2\nprint(df_cond[df_cond['A'] > 2].iloc[:, [0, 2]])  # Select columns 'A' and 'C'\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A    C\n    2  3  300\n    3  4  400\n    4  5  500\n"})}),"\n",(0,a.jsx)(e.h2,{id:"5-modifying-data",children:"5. Modifying Data"}),"\n",(0,a.jsxs)(e.p,{children:["You can use ",(0,a.jsx)(e.code,{children:"iloc"})," to modify specific parts of the DataFrame."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Set the value of the first cell to 0\ndf.iloc[0, 0] = 0\nprint(df)\n\n# Set the values of the first column to 0\ndf.iloc[:, 0] = 0\nprint(df)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       A  B   C   D\n    0  0  5   9  13\n    1  2  6  10  14\n    2  3  7  11  15\n    3  4  8  12  16\n       A  B   C   D\n    0  0  5   9  13\n    1  0  6  10  14\n    2  0  7  11  15\n    3  0  8  12  16\n"})}),"\n",(0,a.jsx)(e.h2,{id:"6-practical-machine-learning-examples",children:"6. Practical Machine Learning Examples"}),"\n",(0,a.jsx)(e.h3,{id:"splitting-data-into-features-and-target",children:"Splitting Data into Features and Target"}),"\n",(0,a.jsx)(e.p,{children:"Separating features (X) and target (y) is a common task."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Sample DataFrame with a target column\ndf_ml = pd.DataFrame({\n    'Feature1': [1, 2, 3, 4, 5],\n    'Feature2': [10, 20, 30, 40, 50],\n    'Target': [0, 1, 0, 1, 0]\n})\n\n# Features (all rows, all columns except the last one)\nX = df_ml.iloc[:, :-1]\n\n# Target (all rows, last column)\ny = df_ml.iloc[:, -1]\n\nprint(\"Features:\\n\", X)\nprint(\"Target:\\n\", y)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"    Features:\n        Feature1  Feature2\n    0         1        10\n    1         2        20\n    2         3        30\n    3         4        40\n    4         5        50\n    Target:\n     0    0\n    1    1\n    2    0\n    3    1\n    4    0\n    Name: Target, dtype: int64\n"})}),"\n",(0,a.jsx)(e.h3,{id:"handling-missing-data",children:"Handling Missing Data"}),"\n",(0,a.jsxs)(e.p,{children:["Using ",(0,a.jsx)(e.code,{children:"iloc"})," to handle missing data by selecting specific parts of the DataFrame."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Sample DataFrame with missing values\ndf_missing = pd.DataFrame({\n    'A': [1, 2, None, 4],\n    'B': [5, None, 7, 8],\n    'C': [None, 10, 11, 12]\n})\n\n# Fill missing values in the first two columns with 0\ndf_missing.iloc[:, :2] = df_missing.iloc[:, :2].fillna(0)\nprint(df_missing)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"         A    B     C\n    0  1.0  5.0   NaN\n    1  2.0  0.0  10.0\n    2  0.0  7.0  11.0\n    3  4.0  8.0  12.0\n"})}),"\n",(0,a.jsx)(e.h3,{id:"data-normalization",children:"Data Normalization"}),"\n",(0,a.jsxs)(e.p,{children:["Using ",(0,a.jsx)(e.code,{children:"iloc"})," to normalize data."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"from sklearn.preprocessing import MinMaxScaler\n\n# Sample DataFrame for normalization\ndf_norm = pd.DataFrame({\n    'Feature1': [1, 2, 3, 4, 5],\n    'Feature2': [10, 20, 30, 40, 50]\n})\n\nscaler = MinMaxScaler()\n\n# Normalize the first two columns\ndf_norm.iloc[:, :2] = scaler.fit_transform(df_norm.iloc[:, :2])\nprint(df_norm)\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"       Feature1  Feature2\n    0      0.00      0.00\n    1      0.25      0.25\n    2      0.50      0.50\n    3      0.75      0.75\n    4      1.00      1.00\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Certainly! Here are some references to official documentation and YouTube videos that can help you learn more about using the ",(0,a.jsx)(e.code,{children:"iloc"})," indexer in pandas for machine learning:"]}),"\n",(0,a.jsx)(e.h2,{id:"official-documentation",children:"Official Documentation"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Pandas Documentation on Indexing and Selecting Data:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html",children:"Pandas Official Documentation - Indexing and Selecting Data"})}),"\n",(0,a.jsxs)(e.li,{children:["This section of the pandas documentation provides comprehensive details on various indexing methods, including ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.strong,{children:["Pandas API Reference for ",(0,a.jsx)(e.code,{children:"iloc"}),":"]})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.iloc.html",children:"Pandas API Reference - iloc"})}),"\n",(0,a.jsxs)(e.li,{children:["This page contains detailed information about the ",(0,a.jsx)(e.code,{children:"iloc"})," property and its usage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"tutorial-videos",children:"Tutorial Videos"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Corey Schafer - Python Pandas DataFrame Tutorial:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=ZyhVh-qRZPA&list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&ab_channel=CoreySchafer",children:"Selecting Rows and Columns from a Pandas DataFrame"})}),"\n",(0,a.jsxs)(e.li,{children:["This playlist covers various methods to select rows and columns in pandas DataFrames, including the use of ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Data School - How do I select a subset of a DataFrame:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=xvpNA7bC8cs",children:"Data School - Pandas iloc"})}),"\n",(0,a.jsxs)(e.li,{children:["Data School provides an in-depth tutorial on selecting subsets of DataFrames using ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Getting Started with Data Analysis:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=ZyhVh-qRZPA",children:"Pandas DataFrames in Python"})}),"\n",(0,a.jsxs)(e.li,{children:["This video explains the basics of pandas DataFrames and covers various indexing techniques including ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Pandas Tutorial:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=vmEHCJofslg",children:"Pandas Tutorial (Data Analysis with Python)"})}),"\n",(0,a.jsxs)(e.li,{children:["A comprehensive tutorial on pandas covering many aspects including data selection and manipulation using ",(0,a.jsx)(e.code,{children:"iloc"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["These resources should provide you with a strong foundation for understanding and utilizing ",(0,a.jsx)(e.code,{children:"iloc"})," in pandas for your machine learning projects."]}),"\n",(0,a.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"iloc"})," indexer is a versatile and powerful tool for data manipulation in pandas, especially useful in the preprocessing stages of machine learning. Mastering ",(0,a.jsx)(e.code,{children:"iloc"})," allows for efficient and precise data selection and modification, essential for building robust machine learning models."]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},7182:(n,e,i)=>{i.d(e,{A:()=>a});const a=i.p+"assets/images/ml-pandas-iloc-2b547d28d1813cf94afb8ae3703b60dd.png"},309:(n,e,i)=>{i.d(e,{A:()=>a});const a=i.p+"assets/images/ml-pandas-iloc-2b547d28d1813cf94afb8ae3703b60dd.png"},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var a=i(6540);const s={},l=a.createContext(s);function c(n){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);