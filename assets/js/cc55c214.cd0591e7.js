"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[31],{1971:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(4848),t=a(8453);const r={slug:"machine-learning/machine-learning-feature-scaling",title:"Machine Learning: Feature Scaling",authors:["me"],tags:["Machine Learning","Data Preprocessing","Feature Scaling"],image:"./ml-feature-scaling.webp"},s="Feature Scaling in Machine Learning: Keeping Your Data on the Same Page",o={permalink:"/gerardo-perrucci/blog/machine-learning/machine-learning-feature-scaling",source:"@site/blog/machine-learning/2024-05-27-machine-learning-feature-scaling.md",title:"Machine Learning: Feature Scaling",description:"Imagine you're a teacher and your students are working on a group project. One student is a math whiz, another excels at writing, and a third is a history buff. If you grade each section based on the individual's absolute strengths, the math whiz would dominate the score, even if the writing and history were excellent. This is similar to what can happen in machine learning with features (data points) on vastly different scales.",date:"2024-05-27T00:00:00.000Z",tags:[{label:"Machine Learning",permalink:"/gerardo-perrucci/blog/tags/machine-learning"},{label:"Data Preprocessing",permalink:"/gerardo-perrucci/blog/tags/data-preprocessing"},{label:"Feature Scaling",permalink:"/gerardo-perrucci/blog/tags/feature-scaling"}],readingTime:3.15,hasTruncateMarker:!1,authors:[{name:"Gerardo Perrucci",title:"Software Engineer",url:"https://github.com/centrodph",imageURL:"https://avatars.githubusercontent.com/u/2073951?v=4",key:"me"}],frontMatter:{slug:"machine-learning/machine-learning-feature-scaling",title:"Machine Learning: Feature Scaling",authors:["me"],tags:["Machine Learning","Data Preprocessing","Feature Scaling"],image:"./ml-feature-scaling.webp"},unlisted:!1,prevItem:{title:"Machine Learning Pandas iloc Cheatsheet",permalink:"/gerardo-perrucci/blog/machine-learning/iloc-cheatsheet"},nextItem:{title:"Machine Learning Process: A Comprehensive Guide",permalink:"/gerardo-perrucci/blog/machine-learning/machine-learning-process"}},l={image:a(606).A,authorsImageUrls:[void 0]},c=[{value:"Why Scale?",id:"why-scale",level:3},{value:"Normalization vs. Standardization: Two Sides of the Scaling Coin",id:"normalization-vs-standardization-two-sides-of-the-scaling-coin",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Imagine you're a teacher and your students are working on a group project. One student is a math whiz, another excels at writing, and a third is a history buff. If you grade each section based on the individual's absolute strengths, the math whiz would dominate the score, even if the writing and history were excellent. This is similar to what can happen in machine learning with features (data points) on vastly different scales."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Learning Feature Scaling Source: someka.net",src:a(1195).A+"",width:"744",height:"342"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Feature scaling"})," is a data pre-processing technique that addresses this issue. It essentially standardizes the range of features in your dataset, ensuring all features contribute equally during model training. Let's delve deeper into why and how this works."]}),"\n",(0,i.jsx)(n.h3,{id:"why-scale",children:"Why Scale?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fair Play for All Features:"})," Features with larger values can overshadow those with smaller ones, even if the smaller ones hold valuable information. Scaling creates a level playing field."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Distance Matters:"})," Many machine learning algorithms rely on calculating distances between data points. Feature scaling ensures these distances accurately reflect the underlying relationships."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Faster & More Efficient Learning:"})," By putting features on a similar scale, the learning algorithm can converge (find an optimal solution) faster and more efficiently."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"normalization-vs-standardization-two-sides-of-the-scaling-coin",children:"Normalization vs. Standardization: Two Sides of the Scaling Coin"}),"\n",(0,i.jsx)(n.p,{children:"Normalization and standardization are two common feature scaling techniques, and the terms are sometimes used interchangeably. However, there's a subtle difference:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Normalization:"})," This technique scales features to a specific range, typically between 0 and 1 (Min-Max Scaling) or -1 and 1. It's useful when you know the data distribution or want to bound values within a specific range."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Formula:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"X_scaled = (X - min(X)) / (max(X) - min(X))\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here,\n_ X_scaled is the normalized feature\n_ X is the original feature value\n_ min(X) is the minimum value in the feature\n_ max(X) is the maximum value in the feature"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardization:"})," This technique transforms features to have a mean of 0 and a standard deviation of 1 (Z-score normalization). It assumes a Gaussian (bell-shaped) distribution for the data and emphasizes outliers more than normalization."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Formula:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"X_scaled = (X - mean(X)) / std(X)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here,\n_ X_scaled is the standardized feature\n_ X is the original feature value\n_ mean(X) is the average of all values in the feature\n_ std(X) is the standard deviation of the feature"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Choosing the Right Technique:"})}),"\n",(0,i.jsx)(n.p,{children:"The best technique depends on your data and the specific algorithm you're using. Here's a general guideline:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use Min-Max scaling if the data distribution is unknown or outliers are not a concern."}),"\n",(0,i.jsx)(n.li,{children:"Use standardization (Z-score) if the data is assumed to be Gaussian distributed or you want to emphasize the impact of outliers."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:"Imagine a dataset with two features: house price (in millions) and distance from a school (in meters). Without scaling, the massive price range would overpower the distance information. Scaling levels the field, allowing the model to learn from both features effectively."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Further Learning:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://towardsdatascience.com/what-is-feature-scaling-why-is-it-important-in-machine-learning-2854ae877048",children:"Feature Scaling and Why Does Machine Learning Need It"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/ml-feature-scaling-part-2/",children:"Feature Engineering: Scaling, Normalization, and Standardization"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",children:"Essence of Linear Algebra"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Remember, feature scaling is a crucial step in building robust and accurate machine learning models. By ensuring all features are on the same page, you can empower your models to learn from your data more effectively."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Choosing the Right Technique:"})}),"\n",(0,i.jsx)(n.p,{children:"The best technique depends on your data and the specific algorithm you're using. Here's a general guideline:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"normalization"})," scaling if the data distribution is unknown or outliers are not a concern."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"standardization"})," (Z-score) if the data is assumed to be Gaussian distributed or you want to emphasize the impact of outliers."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"I hope this addition clarifies the concepts of normalization and standardization with their respective formulas!"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},606:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/ml-feature-scaling-517d099cbcc177a256cef8f8001cebbe.webp"},1195:(e,n,a)=>{a.d(n,{A:()=>i});const i="data:image/webp;base64,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"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(6540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);