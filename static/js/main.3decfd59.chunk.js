(this.webpackJsonpcodebrewery=this.webpackJsonpcodebrewery||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(17),r=n.n(c),o=(n(136),n(66)),s=(n(137),n(16)),d=n(6),j=n(234),l=n(53),x=n.n(l),b=n(99),h=n.n(b),p=n(223),m=n(227),u=n(235),O=n(236),g=n.p+"static/media/chainImg.4cb50df6.jpeg",f=[{id:1,title:"FUTKIDS",copy:"Lorem ipsum dolor sit amet",description:"A mobile application for youth football academies to create player profiles, keep statistics regarding players and stream live matches online. Developed using React Native, NodeJS, Express, MongoDB and Firebase. Will be published in PlayStore and AppleStore soon.",img1:n.p+"static/media/futkids1.97e59eb1.png",img2:n.p+"static/media/futkids2.e830af46.png",img3:n.p+"static/media/futkids3.f5f3d68e.png"},{id:2,title:"LAUNDRATIVE",copy:"Lorem ipsum dolor sit amet",description:"Implementation of an online ordering and POS software for laundry and dry cleaning service providers.Developed using Angular,Ionic, Java, MySQL and",img1:n.p+"static/media/laundrative1.a841ce42.png",img2:n.p+"static/media/laundrative2.57d2ff7b.png",img3:n.p+"static/media/laundrative3.5a06d94c.png"},{id:3,title:"CRYPTOCHAIN ",copy:"Lorem ipsum dolor sit amet",description:"Web application which has its own blockchain and ctyptocurrency with similar to bitcoin hashing, developed using NodeJS and Angular ",img1:g},{id:4,title:"What Does The Folk Say",copy:"Lorem ipsum dolor sit amet",description:"\n            This is an sentiment analysis api developed with NodeJs. With this api, you can find the common opinion in public\n            based on recents tweets about that subject. Api returns a json object showing the what is the public opinion and what is\n            the point of that query through sentiment analysis machine learning algorithm.\n        ",img1:n.p+"static/media/folk.f1fa70cc.jpeg"},{id:5,title:"UP",copy:"Lorem ipsum dolor sit amet",description:"\n            UP is a social media platform for college students. Here students can use this app like twitter or directly message to each other.\n            When students choose which courses they are taking, they automatically participate in group chat created with other students taking the same course.\n            Also students can find job opportunities since this app connects companies and students.\n        ",img1:n.p+"static/media/up1.b4b526e1.jpg",img2:n.p+"static/media/up2.5361f0b0.jpg",img3:n.p+"static/media/up3.397bf5a9.jpg"}],v=n(220),y=n(207),w=n(226),C=(n(138),n(233)),k=n(18),I=n(1),S=Object(k.a)({root:{textShadow:"0 0 2px #FEC0CA",fontFamily:"Bebas Neue, cursive"}})(C.a),F=function(e){return Object(I.jsx)(p.a,{xs:!0,item:!0,margin:5,children:Object(I.jsx)(S,{variant:e.variant,component:"div",color:"whitesmoke",children:e.heading})})},A=function(e){var t=""+1.5*e.space;return Object(I.jsx)("div",{style:{height:t+"vh"}})},N=n(208),R=n(77),T=Object(y.a)((function(e){var t,n;return{projectContainer:Object(d.a)({},e.breakpoints.up("md"),{display:"flex"}),descContainer:{display:"flex",height:"65%",alignItems:"center"},projectDesc:Object(d.a)({color:"white"},e.breakpoints.up("md"),{paddingBottom:"10vh"}),cardImg:(t={},Object(d.a)(t,e.breakpoints.up("md"),{width:"200px",height:"auto"}),Object(d.a)(t,e.breakpoints.down("sm"),{width:"140px",height:"auto"}),t),cardImgSingle:(n={},Object(d.a)(n,e.breakpoints.up("md"),{width:"90%",height:"auto"}),Object(d.a)(n,e.breakpoints.down("sm"),{width:"250px",height:"auto"}),n),cardImgContain:{height:"auto",maxHeight:"45vh",objectFit:"contain !important"}}}));function B(e,t){return e.currentIndex===t?"active":e.nextIndex===t?"next":e.previousIndex===t?"prev":"inactive"}var D=function(){var e=T(),t=Object(R.a)(),n=Object(N.a)(t.breakpoints.down("sm")),a=Object(i.useState)({previousIndex:0,currentIndex:0,nextIndex:1}),c=Object(s.a)(a,2),r=c[0],o=c[1],d=Object(i.useCallback)((function(e){e>0?r.currentIndex>=f.length-1?o({previousIndex:f.length-1,currentIndex:0,nextIndex:1}):o((function(e){return{previousIndex:e.currentIndex,currentIndex:e.currentIndex+1,nextIndex:e.currentIndex+2===f.length?0:e.currentIndex+2}})):0===r.currentIndex?(console.log(r.currentIndex,"current"),o({previousIndex:0,currentIndex:f.length-1,nextIndex:f.length-2})):o((function(e){return{previousIndex:e.currentIndex,currentIndex:e.currentIndex-1,nextIndex:e.currentIndex-1===0?f.length:e.currentIndex-2}}))}),[r.currentIndex]);return Object(I.jsxs)(m.a,{sx:{flexGrow:1},id:"prev-work",children:[Object(I.jsx)(A,{space:10}),Object(I.jsx)(F,{heading:"Previous Works",variant:"h2"}),Object(I.jsxs)(p.a,{sx:{width:"80%",marginLeft:"7%",display:"flex",justifyContent:"space-between"},children:[Object(I.jsx)(j.a,{onClick:function(){return d(1)},variant:"text",color:"inherit",children:Object(I.jsx)(h.a,{style:{color:"white",fontSize:60}})}),Object(I.jsx)(v.a,{variant:"dots",steps:f.length,position:"static",activeStep:r.currentIndex,sx:{size:60,background:"border-box !important",justifyContent:"center"},size:"large"}),Object(I.jsx)(j.a,{onClick:function(){return d(-1)},variant:"text",color:"inherit",children:Object(I.jsx)(x.a,{style:{color:"white",fontSize:60}})})]}),Object(I.jsx)(A,{space:10}),Object(I.jsx)(p.a,{container:!0,children:Object(I.jsx)(p.a,{xs:12,md:12,alignSelf:"center",marginTop:n?12:15,children:Object(I.jsx)(p.a,{className:"d-flex",children:Object(I.jsx)(p.a,{className:"card-carousel",children:f.map((function(t,i){return Object(I.jsx)("li",{style:{backgroundColor:"#2a232d",border:"3px solid #FEC0CA",borderRadius:"40px",boxShadow:"0 0 10px #FEC0CA"},className:"card ".concat(B(r,i)),children:Object(I.jsxs)(p.a,{className:e.projectContainer,children:[Object(I.jsxs)(p.a,{item:!0,sm:12,md:6,lg:5,children:[Object(I.jsx)(F,{variant:"h3",heading:t.title}),Object(I.jsx)(p.a,{className:e.descContainer,children:Object(I.jsx)(w.a,{maxRows:n?4:12,defaultValue:t.description,style:{width:"90%",background:"inherit",border:"none","text-align":"left !important",color:"white",fontFamily:"Rajdhani, sans-serif",fontSize:20}})})]}),t.img2?Object(I.jsx)(p.a,{sm:12,md:6,lg:8,children:Object(I.jsxs)(u.a,{sx:{justifyContent:"center",display:"flex",height:"auto"},variant:"quilted",cols:3,children:[Object(I.jsx)(O.a,{className:e.cardImg,children:Object(I.jsx)("img",{src:t.img1,alt:t.title,loading:"auto",className:e.cardImgContain})}),Object(I.jsx)(O.a,{className:e.cardImg,children:Object(I.jsx)("img",{src:"".concat(t.img2,"?w=161&fit=crop&auto=format"),srcSet:"".concat(t.img2,"?w=161&fit=crop&auto=format&dpr=2 2x"),alt:t.title,className:e.cardImgContain,loading:"lazy"})}),Object(I.jsx)(O.a,{className:e.cardImg,children:Object(I.jsx)("img",{src:"".concat(t.img3,"?w=161&fit=crop&auto=format"),srcSet:"".concat(t.img3,"?w=161&fit=crop&auto=format&dpr=2 2x"),alt:t.title,className:e.cardImgContain,loading:"eager"})})]})}):Object(I.jsx)(p.a,{sm:12,md:6,lg:8,marginTop:5,children:Object(I.jsx)("img",{sx:{height:"auto",width:"auto"},src:t.img1,alt:t.title,loading:"auto",className:e.cardImgSingle})})]})},t.id)}))})})})}),Object(I.jsx)(A,{space:20})]})},E=(n(147),n(237)),z=n(219),W=n(239),L=n(238),P=n(104),M=n.n(P),U=n(105),q=n.n(U),J=n(106),Q=n.n(J),H=n(107),G=n.n(H),V=n(80),Y=n.n(V),K=n(224),Z=n(101),_=n.n(Z),X=n(102),$=n.n(X),ee=n(103),te=n.n(ee),ne=Object(k.a)({root:{fontFamily:"Rajdhani, sans-serif",color:"white",textAlign:"left"}})(C.a),ie=function(e){return Object(I.jsx)(ne,{variant:e.variant,component:e.component,children:e.content})},ae=function(e){var t=Object(R.a)(),n=Object(N.a)(t.breakpoints.down("sm"));return Object(I.jsxs)(p.a,{container:!0,direction:"column",id:"about-us",children:[Object(I.jsx)(A,{space:10}),Object(I.jsx)(F,{heading:"About Us",variant:"h2"}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsxs)(p.a,{container:!0,direction:"row",p:10,children:[Object(I.jsx)(p.a,{item:!0,xs:12,md:6,lg:6,children:Object(I.jsx)(p.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(I.jsx)(ie,{variant:"h6",component:"div",content:"We are a software company developing its on products as well as freelance products using modern technologies.\n    With the servies we are developing, we aim to minimize the pain of working with a freelancer. We specialized in technologies\n    which we believe will give you the result that you wanted. We have three different services."})})}),Object(I.jsx)(p.a,{item:!0,xs:12,md:6,lg:6,children:Object(I.jsx)(p.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(I.jsxs)(E.a,{sx:{width:"100%",maxWidth:360},children:[Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(K.a,{children:Object(I.jsx)(_.a,{})})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(F,{variant:"h6",heading:"Modern"}),sx:{fontStyle:"bold !important"},secondary:Object(I.jsx)(ie,{variant:"p",content:"New and up to date frameworks",style:{color:"gray",fontStyle:"italic"}})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(K.a,{children:Object(I.jsx)($.a,{})})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(F,{variant:"h6",heading:"Fast"}),sx:{fontStyle:"bold !important"},secondary:Object(I.jsx)(ie,{variant:"p",content:"Native performance",style:{color:"gray",fontStyle:"italic"}})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(K.a,{children:Object(I.jsx)(te.a,{})})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(F,{variant:"h6",heading:"Secure"}),sx:{fontStyle:"bold !important"},secondary:Object(I.jsx)(ie,{variant:"p",content:"Backed and used by tech giants",style:{color:"gray",fontStyle:"italic"}})})]})]})})})]})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsxs)(p.a,{container:!0,direciton:"row",justifyContent:"center",children:[Object(I.jsx)(p.a,{item:!0,xs:11,md:5,children:Object(I.jsxs)(p.a,{justifyContent:"center",alignItems:"left",direction:"column",padding:5,container:!0,sx:{backgroundColor:"#2a232d",backgorundColor:"rgba(0, 0, 0, 0.8)",padding:"20px 40px 10px 0px",border:"3px solid #FEC0CA",borderRadius:n?"40px 40px 0px 0px":"40px 0px 0px 40px",boxShadow:"0 0 10px #FEC0CA"},children:[Object(I.jsx)(F,{heading:"Services",variant:"h3",item:!0}),Object(I.jsxs)(E.a,{item:!0,children:[Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(M.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"IOS and Android App Development"})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(q.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"Web Development"})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(Q.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"Api Development"})})]})]})]})}),Object(I.jsx)(p.a,{item:!0,xs:12,md:1,lg:1,children:Object(I.jsx)(p.a,{justifyContent:"center",alignItems:"center",direction:"column",container:!0,sx:{height:"100%",transform:n&&"rotate(90deg)"},children:Object(I.jsx)(G.a,{item:!0,sx:{color:"pink"},style:{fontSize:n?"4rem":"7rem"}})})}),Object(I.jsx)(p.a,{item:!0,xs:11,md:5,children:Object(I.jsxs)(p.a,{justifyContent:"center",alignItems:"left",direction:"column",padding:5,container:!0,sx:{backgroundColor:"#2a232d",backgorundColor:"rgba(0, 0, 0, 0.8)",padding:"20px 40px 10px 0px",border:"3px solid #FEC0CA",borderRadius:n?"0px 0px 40px 40px":"0px 40px 40px 0px",boxShadow:"0 0 10px #FEC0CA"},children:[Object(I.jsx)(F,{heading:"Technologies",variant:"h3"}),Object(I.jsxs)(E.a,{item:!0,children:[Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(Y.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"React Native"})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(Y.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"ReactJS and AngularJS"})})]}),Object(I.jsxs)(z.a,{children:[Object(I.jsx)(L.a,{children:Object(I.jsx)(Y.a,{style:{color:"pink",fontSize:50}})}),Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"h6",content:"NodeJS and C#"})})]})]})]})})]})})]})},ce=n(230),re=n(231),oe=n(229),se=n(216),de=n(232),je=n(113),le=n.n(je),xe=n(228),be=n(212),he=n(225),pe=n(218),me=n.p+"static/media/wow-logo.192485e3.png",ue=n(211),Oe=n(240),ge=n(108),fe=n.n(ge),ve=n(109),ye=n.n(ve),we=n(110),Ce=n.n(we),ke=function(){return Object(I.jsx)(p.a,{direction:"row",justifyContent:"center",alignItems:"center",alignSelf:"center",children:Object(I.jsx)(p.a,{direction:"column",justifyContent:"center",children:Object(I.jsx)(p.a,{direction:"row",justifyContent:"space-around",container:!0,children:Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(p.a,{direction:"row",container:!0,children:Object(I.jsx)("nav",{"aria-label":"footer",item:!0,children:Object(I.jsx)(E.a,{children:Object(I.jsxs)(z.a,{children:[Object(I.jsx)(ue.a,{children:Object(I.jsx)(Oe.a,{children:Object(I.jsx)("a",{href:"https://www.instagram.com/simon.ardayuvarlak/",children:Object(I.jsx)(fe.a,{sx:{color:"white"}})})})}),Object(I.jsx)(ue.a,{children:Object(I.jsx)(Oe.a,{children:Object(I.jsx)("a",{href:"mailto: wowfreelancing@gmail.com",children:Object(I.jsx)(ye.a,{sx:{color:"white"}})})})}),Object(I.jsx)(ue.a,{children:Object(I.jsx)(Oe.a,{children:Object(I.jsx)("a",{href:"https://www.linkedin.com/in/seman-arda-yuvarlak-563572b3/",children:Object(I.jsx)(Ce.a,{sx:{color:"white"}})})})})]})})})})})})})})},Ie=Object(y.a)((function(e){var t,n;return{root:(t={flexGrow:1,height:"100px",paddingTop:"20px"},Object(d.a)(t,e.breakpoints.up("md"),{backgroundColor:"#3D0240"}),Object(d.a)(t,e.breakpoints.down("md"),{backgroundColor:"#3D0240"}),t),dFlex:{display:"flex"},menuButton:{alignSelf:"center",color:"white !important"},title:Object(d.a)({},e.breakpoints.down("md"),{flexGrow:1}),navBtn:(n={width:"10rem",height:"70%",alignSelf:"center",marginRight:"2rem"},Object(d.a)(n,e.breakpoints.up("md"),{color:"white !important"}),Object(d.a)(n,"margin","10px"),Object(d.a)(n,"&:hover",{backgroundColor:"#2a232d !important",border:"3px solid #FEC0CA",borderRadius:"10px 10px 10px 10px",boxShadow:"0 0 5px #FEC0CA",textShadow:"0 0 5px #FEC0CA",padding:"5px"}),n),image:{width:"80px",heiht:"80px",transition:"transform 1.2s",transformStyle:"preserve-3d","&:hover":{transform:"rotateZ(360deg)"},margin:"-5px"}}})),Se=function(e){var t=Ie(),n=a.a.useState(null),i=Object(s.a)(n,2),c=i[0],r=i[1],o=Boolean(c),d=Object(R.a)(),l=Object(N.a)(d.breakpoints.down("md")),x=[{menuTitle:"About Us",pageURL:"/about",id:"about-us",link:"#about-us"},{menuTitle:"Previous Works",pageURL:"/works",id:"prev-work",link:"#prev-work"},{menuTitle:"Roadmap",pageURL:"/roadmap",id:"roadmap",link:"#road-map"}];return Object(I.jsx)("div",{className:t.root,sx:{background:"rgba(0,0,0,0.5)"},children:Object(I.jsx)(be.a,{children:l?Object(I.jsxs)(p.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(I.jsx)(p.a,{children:Object(I.jsx)(j.a,{variant:"image",onClick:function(e){r(e.currentTarget)},children:Object(I.jsx)("img",{src:me,alt:"img",className:t.image})})}),Object(I.jsx)(pe.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:o,onClose:function(){return r(null)},children:x.map((function(e){return Object(I.jsx)(he.a,{onClick:function(){r(null)},color:"#000",children:Object(I.jsx)("a",{href:e.link,style:{textDecoration:"none"},children:Object(I.jsx)(ie,{variant:"p",content:e.menuTitle})})},e.id)}))}),Object(I.jsx)(p.a,{alignItems:"center",alignSelf:"center",children:Object(I.jsx)(ke,{})})]}):Object(I.jsxs)(p.a,{container:!0,direction:"row",justifyContent:"space-around",children:[Object(I.jsx)("img",{src:me,alt:"img",className:t.image}),Object(I.jsx)(p.a,{item:!0,md:8,justifyContent:"space-around",className:t.headerOptions,children:x.map((function(e){return Object(I.jsx)("a",{href:e.link,style:{textDecoration:"none"},children:Object(I.jsx)(j.a,{variant:"text",className:t.navBtn,children:Object(I.jsx)(ie,{variant:"subtitle1",content:e.menuTitle})},e.id)})}))}),Object(I.jsx)(ke,{})]})})})},Fe=n(111),Ae=n.n(Fe),Ne=n(244),Re=function(e){return Object(I.jsxs)(p.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(I.jsx)(p.a,{container:!0,justifyContent:"center",direction:"row",p:1.5,children:Object(I.jsxs)(Ne.a,{sx:{color:e.color},children:[".............................................................",Object(I.jsx)(Ae.a,{sx:{color:e.color}})]})}),Object(I.jsxs)(p.a,{container:!0,direction:"column",children:[Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(p.a,{container:!0,direction:"row",justifyContent:"center",children:Object(I.jsx)(ie,{variant:"h4",component:"div",p:3,align:"center",sx:{color:e.headingColor},content:e.heading})})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(p.a,{container:!0,direction:"row",justifyContent:"center",children:Object(I.jsx)(ie,{variant:"subtitle2",display:"block",gutterBottom:!0,align:"center",pl:3,pr:3,pb:3,sx:{color:e.dateColor},content:e.date})})})]}),Object(I.jsx)(A,{space:3}),Object(I.jsx)("ul",{style:{color:"whitesmoke"},children:e.itemArray.map((function(e){return Object(I.jsx)("li",{children:Object(I.jsx)(ie,{variant:"body1",gutterBottom:!0,p:1,sx:{color:"whitesmoke"},content:e})})}))})]})},Te=[{heading:" Plan Rome",date:"2022 Q1",content:["Subscription System","Blog","Freelance work monitoring tool"]},{heading:"Plan Berlin",date:"2022 Q2",content:["Mailing List and Social Media Presence","Start of the Token Development","Template Offerings For Faster Freelance"]},{heading:"Plan Los Angeles",date:"2022 Q3",content:["Token Release","Token Integration to Current Tools","Airdrop"]},{heading:"Plan Atlantis",date:"2022 Q4",content:["Web App Release","Marketing","Optimization of The Environment"]}],Be=function(){var e=0,t=0,n=0,i=["pink","pink","pink","pink"];return Object(I.jsxs)(p.a,{id:"road-map",children:[Object(I.jsx)(A,{space:10}),Object(I.jsx)(F,{heading:"Road Map",variant:"h2"}),Object(I.jsx)(A,{space:5}),Object(I.jsxs)(p.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(I.jsxs)(p.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(Re,{heading:Te[0].heading,date:Te[0].date,itemArray:Te[0].content,color:i[e++],headingColor:i[t++],dateColor:i[n++]}),Object(I.jsx)(Re,{heading:Te[1].heading,date:Te[1].date,itemArray:Te[1].content,color:i[e++],headingColor:i[t++],dateColor:i[n++]})]}),Object(I.jsxs)(p.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(Re,{heading:Te[2].heading,date:Te[2].date,itemArray:Te[2].content,color:i[e++],headingColor:i[t++],dateColor:i[n++]}),Object(I.jsx)(Re,{heading:Te[3].heading,date:Te[3].date,itemArray:Te[3].content,color:i[e++],headingColor:i[t++],dateColor:i[n++]})]})]})]})},De=function(){var e=(new Date).getFullYear(),t=Object(R.a)(),n=Object(N.a)(t.breakpoints.down("md"));return Object(I.jsx)("div",{id:"footer",children:n?Object(I.jsxs)(p.a,{sx:{backgroundColor:"#3D0240"},children:[Object(I.jsx)(ke,{}),Object(I.jsx)(p.a,{item:!0,direction:"column",justifyContent:"center",alignItems:"center",alignSelf:"center",children:Object(I.jsx)(ie,{variant:"caption",display:"block",gutterBottom:!0,mt:4,content:"Wow&reg"+e})})]}):Object(I.jsx)(p.a,{direction:"column",justifyContent:"center",alignItems:"center",sx:{backgroundColor:"#3D0240"},p:2,children:Object(I.jsx)(p.a,{direction:"row",justifyContent:"center",alignItems:"center",children:Object(I.jsx)(p.a,{direction:"column",justifyContent:"center",children:Object(I.jsxs)(p.a,{direction:"row",justifyContent:"space-around",container:!0,children:[Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(ke,{})}),Object(I.jsx)(p.a,{item:!0,direction:"column",justifyContent:"center",alignItems:"center",alignSelf:"center",children:Object(I.jsx)(ie,{variant:"p",display:"block",gutterBottom:!0,mt:4,content:"Wow\xae"+e})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsxs)(p.a,{direction:"row",container:!0,alignSelf:"center",children:[Object(I.jsx)("nav",{"aria-label":"footer",item:!0,children:Object(I.jsx)(E.a,{children:Object(I.jsx)(z.a,{children:Object(I.jsxs)(ue.a,{children:[Object(I.jsx)(Oe.a,{children:Object(I.jsx)(x.a,{sx:{color:"white"}})}),Object(I.jsx)("a",{href:"#about-us",style:{textDecoration:"none"},children:Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"subtitle1",content:"About Us"}),sx:{color:"white"}})})]})})})}),Object(I.jsx)("nav",{"aria-label":"footer",item:!0,children:Object(I.jsx)(E.a,{children:Object(I.jsx)(z.a,{children:Object(I.jsxs)(ue.a,{children:[Object(I.jsx)(Oe.a,{children:Object(I.jsx)(x.a,{sx:{color:"white"}})}),Object(I.jsx)("a",{href:"#prev-work",style:{textDecoration:"none"},children:Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"subtitle1",content:"Previous Works"}),sx:{color:"white"}})})]})})})}),Object(I.jsx)("nav",{"aria-label":"footer",item:!0,children:Object(I.jsx)(E.a,{children:Object(I.jsx)(z.a,{children:Object(I.jsxs)(ue.a,{children:[Object(I.jsx)(Oe.a,{children:Object(I.jsx)(x.a,{sx:{color:"white"}})}),Object(I.jsx)("a",{href:"#road-map",style:{textDecoration:"none"},children:Object(I.jsx)(W.a,{primary:Object(I.jsx)(ie,{variant:"subtitle1",content:"Road Map"}),sx:{color:"white"}})})]})})})})]})})]})})})})})},Ee=n(114),ze=n(222),We=n(213),Le=n(214),Pe=n(112),Me=n(215),Ue=(n(148),n.p+"static/media/pink-beast.6714c9b5.png"),qe=Object(k.a)({root:{color:"#FFFFFF",fontSize:"3rem",fontFamily:"Rajdhani, sans-serif"}})(We.a),Je=Object(k.a)({root:{color:"#FFFFFF",fontSize:"1.5rem",fontFamily:"Copperplate"}})(We.a),Qe=Object(k.a)({root:{backgroundColor:"#2a232d",backgorundColor:"rgba(0, 0, 0, 0.8)",padding:"20px 40px 10px 0px",border:"3px solid #FEC0CA",borderRadius:"30px 30px 30px 30px",boxShadow:"0 0 10px #FEC0CA"}})(Le.a),He=Object(k.a)({root:{padding:"0% 5% 5% 5%"}})(Le.a),Ge=Object(y.a)((function(e){return{pinkBeast:{"&:hover":{border:"3px solid #FEC0CA",borderRadius:"40px 40px 40px 40px",boxShadow:"0 0 10px #FEC0CA"}}}})),Ve=function(){var e=Ge(),t=Object(R.a)(),n=Object(N.a)(t.breakpoints.down("md"));return Object(I.jsxs)(Le.a,{container:!0,justifyContent:"center",direction:"column",id:"intro",children:[Object(I.jsx)(He,{item:!0,children:Object(I.jsxs)(Qe,{container:!0,direction:"row",children:[Object(I.jsx)(Le.a,{item:!0,xs:6,md:5,lg:5,children:Object(I.jsxs)(Le.a,{container:!0,justifyContent:"center",alignItems:"center",direction:"row",children:[Object(I.jsx)(qe,{item:!0,variant:"h1",component:"div",gutterBottom:!0,children:">"}),Object(I.jsx)(qe,{item:!0,variant:"h1",component:"div",gutterBottom:!0,sx:{color:"#ffffff"},children:Object(I.jsx)(Pe.Typewriter,{words:[" ","_"],delaySpeed:500,deleteSpeed:50,loop:!1})})]})}),Object(I.jsx)(Le.a,{item:!0,xs:6,md:7,lg:7,children:Object(I.jsx)(Le.a,{container:!0,alignItems:"left",children:Object(I.jsx)(qe,{item:!0,variant:"h1",component:"div",gutterBottom:!0,sx:{color:"#ffffff"},children:n?"Wow":"Waves of Web"})})})]})}),Object(I.jsx)(Le.a,{item:!0,children:Object(I.jsx)(Le.a,{container:!0,justifyContent:"center",direction:"row",alignItems:"center",children:Object(I.jsx)(Je,{item:!0,variant:"overline",component:"div",gutterBottom:!0,children:Object(I.jsx)(Me.a,{children:Object(I.jsx)("a",{href:"#about-us",children:Object(I.jsx)("img",{src:Ue,className:e.pinkBeast,style:{height:"200px"},alt:"waves of web"})})})})})}),Object(I.jsx)(Le.a,{item:!0,children:Object(I.jsx)(Le.a,{container:!0,justifyContent:"center",direction:"row",alignItems:"center",children:Object(I.jsx)(Je,{item:!0,variant:"overline",component:"div",gutterBottom:!0})})})]})},Ye=Object(Ee.a)({palette:{primary:{main:"#fff"},secondary:{main:"#2a232d"}}});Ye=Object(Ee.a)(Ye,{palette:{info:{main:Ye.palette.secondary.main}}});var Ke=function(e){function t(e){var t=e.children,n=e.window,i=Object(se.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(I.jsx)(xe.a,{in:i,children:Object(I.jsx)(m.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function n(e){var t=e.children,n=e.window,a=Object(se.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return i.cloneElement(t,{elevation:a?4:0})}return Object(I.jsx)(ze.a,{theme:Ye,children:Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(oe.a,{}),Object(I.jsx)(n,Object(o.a)(Object(o.a)({},e),{},{children:Object(I.jsx)(ce.a,{sx:{background:"rgba(0,0,0,0)"},children:Object(I.jsx)(re.a,{sx:{padding:"0 !important"},children:Object(I.jsx)(Se,{})})})})),Object(I.jsx)(re.a,{id:"back-to-top-anchor"}),Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(A,{space:15}),Object(I.jsx)(Ve,{p:5}),Object(I.jsx)(A,{space:15}),Object(I.jsx)(ae,{context:"\n  body1. Lorem ipsum dolor sit amet, consectetur \n  adipisicing elit. Quos blanditiis tenetur unde suscipit, \n  quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam \n  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.\n  "}),Object(I.jsx)(A,{space:15}),Object(I.jsx)(D,{}),Object(I.jsx)(A,{space:15}),Object(I.jsx)(Be,{}),Object(I.jsx)(A,{space:15}),Object(I.jsx)(De,{})]}),Object(I.jsx)(t,Object(o.a)(Object(o.a)({},e),{},{children:Object(I.jsx)(de.a,{size:"large","aria-label":"scroll back to top",sx:{backgroundColor:"#2a232d !important",border:"3px solid #FEC0CA !important",borderRadius:"40px !important",boxShadow:"0 0 12px #FEC0CA !important"},children:Object(I.jsx)(le.a,{sx:{color:"white"}})})}))]})})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(Ke,{})}),document.getElementById("root")),Ze()}},[[149,1,2]]]);
//# sourceMappingURL=main.3decfd59.chunk.js.map