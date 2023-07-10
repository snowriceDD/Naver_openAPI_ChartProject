/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import useTrendData from "../lib/hooks/useTrendData";

export function PagesShoppingInsight() {
    const trendData = useTrendData();

    
    return (
        <>
        <p>123</p>
        {trendData ? (
        <>
          <p>Status Code: {trendData.statusCode}</p>
          <pre>{trendData.body}</pre>
        </>
      ) : (
        <p>Loading...</p>
      )}
        </>
    )
}