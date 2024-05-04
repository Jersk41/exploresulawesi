import './app.css';
import $ from './jquery';
// import GlobeExample from './globe';

$(function() {
  console.log( "ready!");
});

$('[data-collapse-toggle]').on('click',function(){
  let target = $(this).data('collapseToggle');
  if(!$(this).attr('aria-expanded')){
    console.log('who is the target?',target);
    $(`#${target}`).toggleClass('hidden');
    $(this).addClass('hidden');
  }else{
    $(`#${target}`).toggleClass('hidden');
    $(this).removeClass('hidden');
  }
  // $(`#${target}`).addClass('flex');
});
