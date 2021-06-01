<?php

namespace PrestoPlayer\Services;

/**
 * Registers all blocks
 */
class Blocks
{
    /**
     * Register blocks
     *
     * @return Blocks
     */
    public function register()
    {
        add_filter('block_categories', [$this, 'category']);
        return $this;
    }

    /**
     * Give the blocks a category
     *
     * @param array $categories
     * @return array
     */
    public function category($categories)
    {
        return array_merge(
            [
                [
                    'slug' => 'presto',
                    'title' => __('Presto', 'presto-player'),
                ],
            ],
            $categories
        );
    }
}
