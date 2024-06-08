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
        return now()->diffInYears(now()->year(1988)->month(1)->day(13));
    }
}
