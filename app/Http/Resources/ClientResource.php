<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'id' => $this->id,
            'user_id' => $this->user_id,
            'company'  => $this->company,
            'logo_url'  => $this->logo_url,
            'phone' => $this->phone,
            'firstname'  => $this->firstname,
            'lastname' => $this->lastname,
            'address' => $this->address ,
            'city' => $this->ciry,
            'region' => $this->region,
            'country' => $this->country,
            'postal_code' =>$this->postal_code
        ];
    }
}
