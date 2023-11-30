$(function () {
  //대상을 변수에 저장
  const $faqQ = $(".faq-wrap > ul > li"); //중복 될 가능성 다분. 자식 선택자로 잡아야함
  const $faqA = $(".answer");
  const duration = 300;

  //질문을 클릭했을 때
  $faqQ.on("click", function () {
    //답변을 보여주자(slide down)
    $(this).find($faqA).stop().slideDown(duration); //stop을 걸어놓으면 이상하게 덜덜거리는거 방지할 수 있음
  });
});
