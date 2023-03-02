function CreateDocument(Tag, parents, Attri, AttriValue) {
  const element = document.createElement(Tag);
  parents.appendChild(element)
  if (Attri !== undefined) {
    element.setAttribute(Attri, AttriValue);
  }
}//태그 생성, 속성추가는 선택사항이니까 밑으로 뺌.
// CreateDocument("div",document.body); 이런식으로 2개만 넣어도 작동확인

function DocumentStyle(tag, widthValue, heightValue) {
  tag.style.width = widthValue;
  tag.style.height = heightValue;
}//태그 width, height 값

// DocumentStyle(div,"40px","40px")
// index에서 변수선언해서 tag로 써도 적용됨~

function DisplayStyle(tag, Display, DisplayDirec, JustifyContent, FlexWrap, ZIndex) {
  tag.style.display = Display;
  if (DisplayDirec !== undefined) {
    tag.style.flexDirection = DisplayDirec;
  }
  if (JustifyContent !== undefined) {
    tag.style.justifyContent = JustifyContent;
  }
  if (FlexWrap !== undefined) {
    tag.style.flexWrap = FlexWrap;
  }
  if (ZIndex !== undefined) {
    tag.style.zIndex = ZIndex;
  }
}
// DisplayStyle(div,"flex","","center")
// 속성이 중간에 안넣는 경우엔 ""을 해주면 됨.

function Background(tag, BackgroundColor, BackgroundImage, BackgroundSize, BackgroundPosition) {
  if (BackgroundColor !== undefined) {
    tag.style.backgroundColor = BackgroundColor;
  }
  if (BackgroundImage !== undefined) {
    tag.style.backgroundImage = BackgroundImage;
  }
  if (BackgroundSize !== undefined) {
    tag.style.backgroundSize = BackgroundSize;
  }
  if (BackgroundPosition !== undefined) {
    tag.style.backgroundPosition = BackgroundPosition;
  }
}//배경설정

function FontStyle(tag, FontFamily, FontSize, Color, FontWeight, TextAlign, TextDecoration) {
  if (FontFamily !== undefined) {
    tag.style.fontFamily = FontFamily;
  }
  if (FontSize !== undefined) {
    tag.style.fontSize = FontSize;
  }
  if (Color !== undefined) {
    tag.style.color = Color;
  } if (FontWeight !== undefined) {
    tag.style.fontWeight = FontWeight;
  } if (TextAlign !== undefined) {
    tag.style.textAlign = TextAlign;
  } if (TextDecoration !== undefined) {
    tag.style.textDecoration = TextDecoration;
  }
}//폰트설정

function SpaceStyle(tag, Border, Margin, Padding, OverFlow) {
  if (Border !== undefined) {
    tag.style.border = Border;
  } if (Margin !== undefined) {
    tag.style.margin = Margin;
  } if (Padding !== undefined) {
    tag.style.padding = Padding;
  } if (OverFlow !== undefined) {
    tag.style.overflow = OverFlow;
  }
}//