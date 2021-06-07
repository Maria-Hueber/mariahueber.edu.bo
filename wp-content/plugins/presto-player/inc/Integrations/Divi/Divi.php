<?php

namespace PrestoPlayer\Integrations\Divi;

class Divi {
  public function register()
  {
    add_action( 'divi_extensions_init', [$this, 'init'] );
  }

  public function init()
  {
    require_once 'includes/PrestoPlayer.php';
  }
}