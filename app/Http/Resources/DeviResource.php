<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DeviResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'services' => $this->services,
            'id' => $this->id,
            'company'  => $this->company,
            'phone' => $this->phone,
            'firstname'  => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'address' => $this->address ,
            'city' => $this->ciry,
            'region' => $this->region,
            'country' => $this->country,
            'postal_code' =>$this->postal_code
        ];
    }
}
