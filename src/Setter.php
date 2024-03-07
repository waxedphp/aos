<?php
namespace Waxedphp\Aos;

use \Waxedphp\Waxedphp\Setters\AbstractSetter;

class Setter extends AbstractSetter {

  /**
  */
  protected ?bool $refresh = null;
  protected ?bool $refreshHard = null;

  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
    'refresh', 'refreshHard'
  ];

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value): array {
    $a = $this->getArrayOfAllowedOptions();
    if (is_bool($value)) {
      $a['refresh'] = $value;
    }
    return $a;
  }

}
