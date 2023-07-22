<?php

class Gidi_Flights_API_Permission_Checker
{

	/**
	 * used to confirm certain permissions
	 *
	 * @param array $request
	 * @return void
	 */
	public function permission_checks($request)
	{
		return true;
		// return current_user_can('edit_posts');
	}

	/**
	 * used to confirm certain permissions
	 *
	 * @param array $request
	 * @return void
	 */
	public function no_priv_permission_check($request)
	{
		return true;
	}
}
