<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class ZacksAge extends Tags
{
    /**
     * The {{ zacks_age }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        return floor(now()->parse('1988-01-13')->diffInYears());
    }
}
