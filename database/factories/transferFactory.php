<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class transferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->text($maxNbChars = 200),
            'amount' =>$this->faker->numberBetween($min = 10, $max = 90),
            'wallet_id' =>$this->faker->randomDigitNotNull()
        ];
    }
}
