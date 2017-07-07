var sourceText;


function preload() {
  verse1Reference = loadStrings( 'verses/verse-1.txt' );
  verse2Reference = loadStrings( 'verses/verse-2.txt' );
  verse3Reference = loadStrings( 'verses/verse-3.txt' );
}

function setup() {
  noCanvas();



  //Setup verses
  verse1Reference = join( verse1Reference, " " );
  verse1Final = splitTokens( verse1Reference, " ;.:!?" );

  verse2Reference = join( verse2Reference, " " );
  verse2Final = splitTokens( verse2Reference, " ;.:!?" );

  verse3Reference = join( verse3Reference, " " );
  verse3Final = splitTokens( verse3Reference, " ;.:!?" );

  sourceText = select( '#source' );

  var submit = select( "#submit" );
  submit.mousePressed( programmify );

  verse1 = select( "#verse-1" );
  verse1.mousePressed( function () {
    sourceText.elt.value = '';
    verse1.class( "list-group-item active" );
    verse2.class( "list-group-item" );
    verse3.class( "list-group-item" );
    // verse4.class( "list-group-item" );
    // verse5.class( "list-group-item" );
    sourceText.elt.value = verse1Final.join( " " );
  } );

  verse2 = select( "#verse-2" );
  verse2.mousePressed( function () {
    sourceText.elt.value = '';
    verse1.class( "list-group-item" );
    verse2.class( "list-group-item active" );
    verse3.class( "list-group-item" );
    // verse4.class( "list-group-item" );
    // verse5.class( "list-group-item" );
    sourceText.elt.value = verse2Final.join( " " );
  } );

  verse3 = select( "#verse-3" );
  verse3.mousePressed( function () {
    sourceText.elt.value = '';
    verse1.class( "list-group-item" );
    verse2.class( "list-group-item" );
    verse3.class( "list-group-item active" );
    // verse4.class( "list-group-item" );
    // verse5.class( "list-group-item" );
    sourceText.elt.value = verse3Final.join( " " );
  } );

  resultContainer = select( '#resultContainer' );
  warningContainer = select( '#warningContainer' );

}



function programmify() {



  if ( sourceText.value() === '' ) {
    resultContainer.class( "alert alert-warning" );
    resultContainer.elt.innerHTML = 'Please enter some text!';
  } else {

    var find = [ 'God', 'Word', 'made', 'light', 'world', 'shines', 'words', 'word', 'mouth' ];
    var replace = [ 'the programmer', 'code', 'programmed', 'running program', 'simulation', 'runs', 'code', 'piece of code', 'hands' ];
    var finalText = [];
    var text = splitTokens( sourceText.value(), " ,;.:?!" );

    text.forEach( function ( el, pos ) {
      finalText[ pos ] = el.replaceArray( find, replace );
    } );


    resultContainer.class( "alert alert-info" );
    resultContainer.elt.innerHTML = finalText.join( " " );

  }



}

// additional functionality top the String prototype
String.prototype.replaceArray = function ( find, replace ) {
  var replaceString = this;
  for ( var i = 0; i < find.length; i++ ) {
    replaceString = replaceString.replace( find[ i ], replace[ i ] );
  }
  return replaceString;
};
